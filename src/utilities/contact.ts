import axios from "axios";

export const send = async (email: string, name: string, text: string) => {
    const res =  await axios.post("https://vasyok28-gmail-portfolio.herokuapp.com/send/", {email, name, message: text});
    console.log(res);
}
