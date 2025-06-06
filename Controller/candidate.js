import db from "../server.js";
import dbConnect from "../DataBase/db.js";
const pool = await dbConnect();
console.log("pooll", pool);
if (pool) {
} else {
  console.log("Failed to establish a connection to the database");
}

export const candidateRegisteration = async (req, res) => {
  let { Mobile, Email, Name, Password } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "candidateRegisteration")
      .input("Mobile", Mobile)
      .input("Email", Email)
      .input("Name", Name)
      .input("Password", Password)
      .execute("SP_SquareBoat");

    console.log(recordset);

    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};

export const candidateLogin = async (req, res) => {
  let { Email, Password } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "candidateLogin")
      .input("Email", Email)
      .input("Password", Password)
      .execute("SP_SquareBoat");
    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};

export const getAllCurrentOpening = async (req, res) => {
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "getAllCurrentOpening")
      .execute("SP_SquareBoat");
    console.log(recordset);

    let filterData = recordset.map((item) => {
      return {
        jobID: item.jobID,
        jobDescriptions: item.jobDescriptions,
        jobTitle: item.jobTitle,
        yearsOfExp: item.yearsOfExp,
      };
    });
    res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      Data: filterData,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};

export const candidateLogout = async (req, res) => {
  let { Email, Password } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "candidateLogout")
      .input("Email", Email)
      .input("Password", Password)
      .execute("SP_SquareBoat");
    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};
