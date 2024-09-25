import bcrypt from 'bcryptjs';

let generateHash = async (data:string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
}

export default generateHash;