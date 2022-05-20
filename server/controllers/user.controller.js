class UserController {
    async register(req, res, next) {
        try {
            res.json(
                {
                    level: 'controller.UserController',
                    method: 'register',
                    time: Date.now(),
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    async activate(req, res, next) {
        try {
            res.json(
                {
                    level: 'controller.UserController',
                    method: 'activate',
                    time: Date.now(),
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    async login(req, res, next) {
        try {
            res.json(
                {
                    level: 'controller.UserController',
                    method: '',
                    time: Date.now(),
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    async logout(req, res, next) {
        try {
            res.json(
                {
                    level: 'controller.UserController',
                    method: 'logout',
                    time: Date.now(),
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    async refresh(req, res, next) {
        try {
            res.json(
                {
                    level: 'controller.UserController',
                    method: 'getUsers',
                    time: Date.now(),
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(
                {
                    level: 'controller.UserController',
                    method: 'getUsers',
                    time: Date.now(),
                }
            );
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new UserController();