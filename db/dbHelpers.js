module.exports = function(knex){

    // Admin Table Functions

    const addAdmin = function(email) {
        knex('admin').select('id').where('email',email)
        .then((id)=>{
            console.log(id)
            if(id[0]) {
                console.log("no email added")
                return
            } else {
                console.log("new email added!")
                return knex('admin').insert({
                    email: email,
                })
            }
        })
        .then((res) => res)
        .catch(err => console.log(err))
    }
    const searchForAdminByID = function(id) {
        return knex.select('email').table('admin').where('id', id)
        .then((res) => res)
        .catch(err => console.log(err))
    }
    const searchForAdminByEmail = function(email) {
        return knex.select('id').table('admin').where('email', email)
        .then((res) => res)
        .catch(err => console.log(err))
    }

    // Survey Table Functions

    const addSurveyInfo = function(id, adminLink, userLink, question) {
        return knex('survey').insert({
            admin_id: id,
            admin_link: adminLink,
            user_link: userLink,
            question: question,
        })
        .then((res) => res)
        .catch(err => console.log(err))
    }
    const searchSurveyByID = function(id) {
        return knex.select().table('survey').where('id', id)
        .then((res) => res)
        .catch(err => console.log(err))
    } 
     const searchSurveyByUserLink = function(user_link) {
        return knex.select().table('survey').where('user_link', user_link)
        .then((res) => res)
        .catch(err => console.log(err))
    }
     const searchSurveyByAdminLink = function(admin_link) {
        return knex.select().table('survey').where('admin_link', admin_link)
        .then((res) => res)
        .catch(err => console.log(err))
    }
  
    // Results Table Functions 

    const addResultsInfo = function(array) {
        return knex('results').insert(array)
        .then((res) => res)
        .catch(err => console.log(err))
    }
    const incrementResultsScore = function(id, score) {
        return knex('results').where('id', id).increment('score', score)
        .then((res) => res)
        .catch(err => console.log(err))
    }
    const searchResultsByID = function(id) {
        return knex.select().table('results').where('id', id)
        .then((res) => res)
        .catch(err => console.log(err))
    }
    const searchResultsBySurveyID = function(id) {
        return knex.select().table('results').where('survey_id', id)
        .then((res) => res)
        .catch(err => console.log(err))
    }

return { 
    addAdmin,
    searchForAdminByID,
    searchForAdminByEmail,
    addSurveyInfo,
    searchSurveyByID,
    searchSurveyByUserLink,
    searchSurveyByAdminLink,
    addResultsInfo,
    incrementResultsScore,
    searchResultsByID,
    searchResultsBySurveyID
}

}