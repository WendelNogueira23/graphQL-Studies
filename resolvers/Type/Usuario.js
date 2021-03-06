const db = require('../../config/db')

module.exports = {
    async perfis(usuario) {
        return await db('perfis')
            .join('usuarios_perfis', 'perfis.id', 'usuarios_perfis.perfil_id')
            .where({ usuario_id: usuario.id });
    }
}