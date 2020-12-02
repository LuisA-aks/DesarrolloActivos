using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Polizas
    {
      //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        public List<Poliza> mostrarpolizas(string conexionF)
        {
            List<Poliza> pro = new List<Poliza>();
           

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
               
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_Polizas";
                  

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                       
                        Poliza p = new Poliza()
                        {
                            id_aseguramiento = rdr["id_aseguramiento"].ToString(),
                            nombre_seguro= rdr["nombre_seguro"].ToString()
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