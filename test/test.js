const request = require('supertest')
const app = require("../index");


describe('Todo Test', () => {
    it('return all the todo list', async () => {
        const res = await request(app)
          .get('/api/todos')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].name).toBe('Add backend functionality to the website');
      })

      it('Add a new Todo item', async () => {
        const res = await request(app)
          .post('/api/todos').send({
              name: 'Buy Grocery',
              completed: false
          })
          expect(res.body.pop().name).toBe('Buy Grocery')
        expect(res.statusCode).toEqual(200)
      })

      it('Add a new Todo item', async () => {
        const res = await request(app)
          .post('/api/todos').send({
              name: 'Buy Grocery',
              completed: false
          })
          expect(res.body.pop().name).toBe('Buy Grocery')
        expect(res.statusCode).toEqual(200)
      })

      it('Delete an existing Todo', async () => {
        const res = await request(app)
        .delete("/api/todos/1")
        const resGet = await request(app)
        .get("/api/todos/")
        expect(res.statusCode).toEqual(200)
        expect(resGet.body[0].name).toBe('Pay rent')
     
         
      })

      it('Update an existing Todo', async () => {
        const res = await request(app)
        .put("/api/todos/").send({
            id: 2,
            name: "Buy Groci",
            completed: true
        })
        const resGet = await request(app)
        .get("/api/todos/")
        expect(res.statusCode).toEqual(200)
        expect(resGet.body[0].name).toBe("Buy Groci")
     
         
      })

      it('return all Completed todos', async () => {
        const res = await request(app)
          .get('/api/todosCompleted')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].completed).toBe(true);
      })

      it('Update a todo to completed', async () => {
        const res = await request(app)
        .put("/api/markCompletedtodos").send({
            id: 3
        })
        const resGet = await request(app)
        .get("/api/todosCompleted")
       // expect(res.statusCode).toEqual(200)
        expect(resGet.body[1].name).toBe("Take my Dog for a walk")
     
         
      })

})