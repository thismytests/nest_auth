-- todo ... Nick Litvin ... will be removed in production. Ask A.Racheck
INSERT INTO users
(login, password, firstName, lastName)
SELECT 'login',  'password', 'firstName', 'lastName'
WHERE
    NOT EXISTS(
        SELECT login, password FROM users
        WHERE password = 'password' and login='login'
    )
