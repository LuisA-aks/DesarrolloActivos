using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Marcas
    {
        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        public List<Marca> mostrarmarcas(string conexionF)
        {

            List<Marca> pro = new List<Marca>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute  SP_Marcas";

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Marca p = new Marca()
                    {
                        id_MarcaArticulo = Convert.ToInt16(rdr["id_MarcaArticulo"]),
                        nombre_MarcaArticulo = rdr["nombre_Marca"].ToString()

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