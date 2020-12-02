using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Locals
    {
        public List<Local> dameinfoactivo(string conexionF, string id)
        {
            List<Local> pro = new List<Local>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaPlacaActivoId @id";
                    mycmd.Parameters.Add("@id", SqlDbType.Int, 150).Value = id;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Local p = new Local()
                        {
                            id_Activo = rdr["id_Activo"].ToString(),
                            placa_Activo = rdr["placa_Activo"].ToString(),
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