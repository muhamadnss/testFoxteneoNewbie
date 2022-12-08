module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.render('../index.ejs')
    })
    
    app.get('/api-sport-events.php6-02.test.voxteneo.com/api/v1/users', function(req, res) {
        res.render('../signup.ejs')
    })

    app.get('/api-sport-events.php6-02.test.voxteneo.com/api/v1/users/login', function(req, res) {
        res.render('../login.ejs')
    })

    app.get('/api-sport-events.php6-02.test.voxteneo.com/api/v1/users/:id', function(req, res) {
        res.render('../signup.ejs')
    })

    app.post('//api-sport-events.php6-02.test.voxteneo.com/api/v1/users', function(req, res) {
        let _firstName = req.body.userName
        let _lastName = req.body.lastName
        let _email = req.body.email
        let _password = req.body.password
        let _repeatPassword = req.body.repeatPassword
        res.send(
            `
                firstName: ${_firstName},
                lastName: ${_lastName},
                email: ${_email},
                password: ${_password},
                repeatPassword: ${_repeatPassword}
            `
        )
    })
}
