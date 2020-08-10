const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Vanessa Souto", 
        avatar:"https://avatars1.githubusercontent.com/u/41805753?s=460&u=7df7c708b80f00cbc94041a3ab7553332f025014&v=4", 
        whatsapp: "14991386328", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1, 
        cost: "20"
        //proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }

    ]
    
    //await createProffy (db, { proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos
    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    //consultar as classes de um determinado professor 
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    
    // horario que a pessoa trabalha, por exemplo, é das 8 as 18h
    // o horario time_from (8h) precisa ser menor ou igual ao horario solicitado
    //time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)
    //console.log(selectClassesSchedules)
})