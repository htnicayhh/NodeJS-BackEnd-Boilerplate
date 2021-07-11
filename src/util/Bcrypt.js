import bcrypt from 'bcryptjs'

export const hashSync = (password) => {
    const salt = bcrypt.genSaltSync(12)
    return bcrypt.hashSync(password, salt)
}

export const compareSync = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}