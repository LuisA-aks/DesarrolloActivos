using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Movimientos
    {
       // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        public List<Movimiento> mostrarmovimientos(string conexionF)
        {
            List<Movimiento> pro = new List<Movimiento>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_DameMovimientos";
              

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Movimiento p = new Movimiento()
                    {
                        id_movimiento = rdr["id_movimientos"].ToString(),
                        nombre_movimiento = rdr["nombre_movimientos"].ToString()
                    };
                    pro.Add(p);
                    
                }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return pro;
        }
    }
}