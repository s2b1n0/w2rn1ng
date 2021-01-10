const LANGUAGES = {
    "pt-br": {
        1: "PARE AQUI!", 
        2: "Este é um recurso de navegador voltado para desenvolvedores. Se alguém disse para você copiar e colar algo aqui para ativar um recurso especial, 'invadir' a conta de outra pessoa, ou realizar qualquer outro tipo de operação duvidosa, isso é uma fraude e você dará a ele acesso à sua conta.!",
        3: "Consulte https://en.wikipedia.org/wiki/Self-XSS para obter mais informações."
    },
    "en": {
        1: "STOP HERE!",
        2: "This is a browser feature aimed at developers. If someone told you to copy and paste something here to activate a special feature, 'hack into' someone else's account, or perform any other dubious operation, this is fraud and you will give them access to your account.!",
        3: "Consult https://en.wikipedia.org/wiki/Self-XSS for further details."
    },
    "es": {
        1: "DETÉNGASE AQUÍ",
        2: "Esta es una función de navegador dirigida a desarrolladores. Si alguien le dijo que copie y pegue algo aquí para activar una función especial, 'piratear' la cuenta de otra persona o realizar cualquier otra operación dudosa, esto es un fraude y le dará acceso a su cuenta.",
        3: "Ver https://en.wikipedia.org/wiki/Self-XSS para más información."
    }
}

class Warning {
    constructor(language){
        this.language = language;
    }

    run(){
        // verify if language selected is supported
        if ( LANGUAGES[this.language] ){
            for ( let message_number in LANGUAGES[this.language] ) {
                
                if ( message_number == 1 ) {
                    setTimeout(console.log.bind(console, `%c${LANGUAGES[this.language][message_number]}`, 'color: #FF0000; font-size:80px; font-weight:bold'), 0);
                } else {
                    setTimeout(console.log.bind(console, `%c${LANGUAGES[this.language][message_number]}`, 'color: #FFFFFF; font-size:20px; font-weight:bold'), 0);
                }
            }

        } else {
            console.log("Language not found. Please review the documentation about languages available in .... If you don't find your language, you can contribute and add your language in ...")
        }
    }
}