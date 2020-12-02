using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Familias
    {
      // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
        public List<Familia> mostrarfamilia(string conexionF)
        {
            List<Familia> pro = new List<Familia>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute selectfamilia";

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Familia p = new Familia()
                    {
                        id_Familia = Convert.ToInt16(rdr["id_Familia"]),
                        nombre_Familia = rdr["nombre_Familia"].ToString()

                    };
                    pro.Add(p);
                    //reto codigo
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