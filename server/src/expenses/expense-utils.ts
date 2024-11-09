import { Expense } from "../types";
import { Request, Response } from "express";
import { Database } from "sqlite";


export async function createExpenseServer(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
        res.status(201).send({ id, description, cost });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };
 
 }

 //Lab 6 exercise done

 export async function deleteExpense(
    req: Request,
    res: Response,
    db: Database
  ) {
    const { id } = req.params;
    console.log(id);
    const idDb = await db.all("SELECT id FROM expenses WHERE id = ?;", [id]);
    if (idDb .length === 0) {
      return res.status(400).send({ error: "Warning: Expense could not be found" });
    }
    await db.run("DELETE FROM expenses WHERE id = ?;", [id]);
    res.status(201).send();
  }
  



export async function getExpenses(req: Request, res: Response, db: Database) {
    
  const allExpenses = await db.all("SELECT * FROM expenses");
  console.log(allExpenses );
  res.status(200).send({ data: allExpenses  });

}