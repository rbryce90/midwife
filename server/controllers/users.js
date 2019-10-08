module.exports = {
    getTeamMember: (req, res) => {
        const db = req.app.get('db');
        console.log('getTeamMember');   
        console.log(req.params)     
        const { id } = req.params;
        db.get_team_member(id).then(employee => res.status(200).send(employee))
    },
    getClassesByInstructor: (req, res) => {
        const db = req.app.get('db');
        console.log('getTeamMember');   
        console.log(req.params)     
        const { id } = req.params;
        db.get_class_instructor(id).then(classes => res.status(200).send(classes))
    }
}