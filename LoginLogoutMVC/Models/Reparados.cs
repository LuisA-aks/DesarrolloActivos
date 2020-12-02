using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Reparados
    {
        public List<Reparado> verdatosreparado(string placa, string conexionF)
        {
            List<Reparado> pro = new List<Reparado>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaDatosReparar @placa";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Reparado p = new Reparado()
                        {
                            placa_Activo= rdr["placa_Activo"].ToString(),
                            id_Activo = rdr["id_Activo"].ToString(),
                            descripcion= rdr["descripcion"].ToString(),
                            nombre_modelo= rdr["nombre_modelo"].ToString(),
                            nombre_Estado= rdr["nombre_Estado"].ToString(),
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