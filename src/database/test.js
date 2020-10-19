const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {


    //inserir dados na tabela
   await saveOrphanage(db, {
        lat: "-5.0959061",
        lng: "-42.8120304",
        name: "Lar de maria",
        about: "Casa de Apoio à Criança com Câncer.",
        images: [

            "https://angelmob.com.br/media/ongs/Logo20Lar20de20maria.jpg.jpg",

            "https://cidadeverde.com/assets/uploads/noticias/79c4c541b3040960aaeb77549d7f4ccd.jpg"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1"
})


    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")

    //deletar dado de tabela
    await db.run("DELETE FROM tabela WHERE id ='")
})

