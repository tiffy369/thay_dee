/**
 * PromptPay EMVCo QR Code Payload Generator
 * Conforms to Bank of Thailand & EMVCo Standard for Thai QR Payment
 */

(function(window) {
    function crc16(data) {
        var crc = 0xffff;
        for (var i = 0; i < data.length; i++) {
            var c = data.charCodeAt(i);
            crc ^= (c << 8);
            for (var j = 0; j < 8; j++) {
                if ((crc & 0x8000) !== 0) {
                    crc = ((crc << 1) ^ 0x1021) & 0xffff;
                } else {
                    crc = (crc << 1) & 0xffff;
                }
            }
        }
        var hex = crc.toString(16).toUpperCase();
        while (hex.length < 4) {
            hex = '0' + hex;
        }
        return hex;
    }

    function formatField(id, val) {
        var len = val.length.toString();
        while (len.length < 2) {
            len = '0' + len;
        }
        return id + len + val;
    }

    function sanitizeIdentifier(id) {
        if (!id) return '';
        return id.replace(/[^0-9]/g, '');
    }

    function generatePayload(target, amount) {
        var cleanTarget = sanitizeIdentifier(target);
        var subTag = '';
        var formattedTarget = '';

        if (cleanTarget.length === 10 && cleanTarget.startsWith('0')) {
            // Mobile Phone: 08x-xxx-xxxx -> 00668xxxxxxxx (13 chars)
            subTag = '01';
            formattedTarget = '0066' + cleanTarget.substring(1);
        } else if (cleanTarget.length === 9 && cleanTarget.startsWith('0')) {
            subTag = '01';
            formattedTarget = '0066' + cleanTarget.substring(1);
        } else if (cleanTarget.length === 13) {
            // National ID or Tax ID: 13 digits
            subTag = '02';
            formattedTarget = cleanTarget;
        } else if (cleanTarget.length === 15) {
            // E-Wallet: 15 digits
            subTag = '03';
            formattedTarget = cleanTarget;
        } else {
            // Fallback: try as phone
            subTag = '01';
            formattedTarget = '0066' + (cleanTarget.startsWith('0') ? cleanTarget.substring(1) : cleanTarget);
        }

        // Tag 29: Merchant Account Info
        var aidField = formatField('00', 'A000000677010111');
        var targetField = formatField(subTag, formattedTarget);
        var tag29Value = aidField + targetField;

        var raw = '';
        raw += formatField('00', '01'); // Payload Format Indicator
        raw += formatField('01', amount ? '12' : '11'); // 12 = Dynamic (amount specified), 11 = Static
        raw += formatField('29', tag29Value);
        raw += formatField('53', '764'); // THB currency code

        if (amount && Number(amount) > 0) {
            var formattedAmount = Number(amount).toFixed(2);
            raw += formatField('54', formattedAmount);
        }

        raw += formatField('58', 'TH'); // Country Code

        // Checksum tag 63
        var toCheck = raw + '6304';
        var checksum = crc16(toCheck);

        return toCheck + checksum;
    }

    window.PromptPay = {
        generatePayload: generatePayload,
        crc16: crc16,
        formatPhone: function(phone) {
            var clean = sanitizeIdentifier(phone);
            if (clean.length === 10) {
                return clean.slice(0, 3) + '-' + clean.slice(3, 6) + '-' + clean.slice(6);
            }
            return phone;
        }
    };
})(window);
