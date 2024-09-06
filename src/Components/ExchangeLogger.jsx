import React from 'react';

const ExchangeLogger = ({ onExchange }) => {
    const logExchangeData = async () => {
        try {
            const response = await fetch('https://639e24c7-a0e8-45d4-b6ac-983cdcd0fd3b-00-38nix80ufcr7v.janeway.replit.dev/log-exchange', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-agent': navigator.userAgent,
                    'accept-language': navigator.language,
                },
                body: JSON.stringify({
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    operatingSystem: navigator.platform,
                }),
                mode: 'cors',
            });

            if (response.ok) {
                console.log('Exchange data logged successfully');
                onExchange();
            } else {
                console.error(`Failed to log exchange data. Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { logExchangeData };
};

export default ExchangeLogger;
