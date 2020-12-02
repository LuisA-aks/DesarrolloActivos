using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Descripciones
    {
      //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public List<Descripcion> mostrardescripcion(string usuario, string conexionF)
        {
            List<Descripcion> pro = new List<Descripcion>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_FiltraActivos @id";
                mycmd.Parameters.Add("@id", SqlDbType.Int, 150).Value = Convert.ToInt16(usuario);

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Descripcion p = new Descripcion()
                    {
                        placa_Activo= rdr["placa_Activo"].ToString(),
                        descripcion= rdr["descripcion"].ToString(),
                        Mensaje = rdr["Mensaje"].ToString(),
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