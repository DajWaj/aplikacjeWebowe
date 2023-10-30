import express from 'express';
import { promises as fs } from 'fs';

const students = [
    { "id": 1, "name": "Andrzej", "surname": "Duda", "email": "andrzej.duda@prezydent.pl" },
    { "id": 2, "name": "Mateusz", "surname": "Morawiecki", "email": "mateusz.morawiecki@kprm.gov.pl" },
    { "id": 3, "name": "Jarosław", "surname": "Kaczyński", "email": "jaroslaw.kaczynski@pis.org.pl" },
    { "id": 4, "name": "Donald", "surname": "Tusk", "email": "donald.tusk@europa.eu" },
    { "id": 5, "name": "Beata", "surname": "Szydło", "email": "beata.szydlo@pis.org.pl" },
    { "id": 6, "name": "Robert", "surname": "Biedroń", "email": "robert.biedron@partiarazem.pl" },
    { "id": 7, "name": "Anna", "surname": "Grodzka", "email": "anna.grodzka@partiarazem.pl" },
    { "id": 8, "name": "Rafał", "surname": "Trzaskowski", "email": "rafal.trzaskowski@warszawa.pl" },
    { "id": 9, "name": "Krystyna", "surname": "Pawłowicz", "email": "krystyna.pawlowicz@pis.org.pl" },
    { "id": 10, "name": "Barbara", "surname": "Nowacka", "email": "barbara.nowacka@partiarazem.pl" }
];

const subjects = [
    { "id": 1, "name": "Mathematics", "hoursAWeek": 4 },
    { "id": 2, "name": "Physics", "hoursAWeek": 3 },
    { "id": 3, "name": "Geography", "hoursAWeek": 1 },
    { "id": 4, "name": "Physical Education", "hoursAWeek": 3 },
    { "id": 5, "name": "PAW", "hoursAWeek": 2 },
    { "id": 6, "name": "Chemistry", "hoursAWeek": 3 },
    { "id": 7, "name": "Computer Science", "hoursAWeek": 2 },
    { "id": 8, "name": "History", "hoursAWeek": 2 },
    { "id": 9, "name": "English Language", "hoursAWeek": 3 },
    { "id": 10, "name": "Biology", "hoursAWeek": 3 },
];

const router = express.Router();

router.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find(student => student.id.toString() === id);

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ error: 404, message: "Nie ma takiego ucznia" });
    }
});

router.get('/subjects/:id', (req, res) => {
    const id = req.params.id;
    const subject = subjects.find(subject => subject.id.toString() === id);

    if (subject) {
        res.status(200).json(subject);
    } else {
        res.status(404).json({ error: 404, message: "Nie ma takiego przedmiotu" });
    }
});

router.get('/students', (req, res) => {
    res.status(200).json(students);
});

router.get('/subjects', (req, res) => {
    res.status(200).json(subjects);
});

router.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text')
    const json = await fs.readFile('api.json');
    res.end(json)
})


export { router as apiRouter };
