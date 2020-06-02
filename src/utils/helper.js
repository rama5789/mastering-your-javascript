const log = (tag, funcName, env = 'development') => {
    if (env === 'development' && tag) {
        // const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        const currentDateTime = moment().format('h:mm:ss a');
        if (funcName) {
            console.log(
                `\n\n %c${currentDateTime} <--- %c${tag}__${funcName}() %ctriggered ---> \n\n`,
                'color: blue;',
                'color: green; font-size: large',
                'color: blue;',
            );
        } else {
            console.log(
                `\n\n %c${currentDateTime} <--- %c${tag} %ctriggered ---> \n\n`,
                'color: blue;',
                'color: green; font-size: large',
                'color: blue;',
            );
        }
    }
};