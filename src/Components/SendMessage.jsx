import axios from 'axios';

export const sendMessage = async (message) => {
    // const token = '7242858872:AAHxAF1Q_u_OVibYTwn1xyDpaZW5SHEPdtU'; //online -> Gabriel
    const token = '7055164318:AAHsc1jf6JK4GXXlqfmrmJRuAnmj94WDi0I';  //local -> erwin
    let chatId = null;

    try {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();  // Ensure the Web App is ready
            const user = window.Telegram.WebApp.initDataUnsafe?.user;
            if (user) {
                chatId = user.id;
            }
        }

        if (!chatId) {
            throw new Error("Chat ID is not available.");
        }

        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: message,
        });
        console.log("Message sent!");
    } catch (error) {
        console.error("Error sending message:", error);
    }
};
