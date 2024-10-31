import express from 'express'
        import userCtrl from '../controllers/contact.controller.js'
        const router = express.Router()
        router.route('/api/contacts').post(userCtrl.create)
        router.route('/api/contacts').get(userCtrl.list)
        router.param('userId', userCtrl.userByID)
        router.route('/api/contacts/:userId').get(userCtrl.read)
        router.route('/api/contacts/:userId').put(userCtrl.update)
        router.route('/api/contacts/:userId').delete(userCtrl.remove)

        export default router