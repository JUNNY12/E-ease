
export const sayGreeting = () =>{
    const date = new Date();

    switch (true) {
        case date.getHours() < 12:
            return "Good morning";
        case date.getHours() < 15:
            return "Good afternoon";
        default:
            return "Good evening";
    }
}