import authObj from "../appwrite"
import { Client, ID, TablesDB } from "appwrite";

class Database {
    client = new Client()
    tableDb

    async userRow(data) {
        this.client
            .setEndpoint(authObj.endPoint)
            .setProject(authObj.projectId)
        this.tableDb = new TablesDB(client)

        try {
            await this.tableDb.createRow({
                databaseId: authObj.databaseId,
                tableId: authObj.tableId,
                rowId: ID.unique(),
                data: data
            })
        } catch (error) {

        }

    }

};