using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class SpecActivos
    {
        public List<SpecActivo> mostrarSpecs(string conexionF,string placa)
        {
            List<SpecActivo> pro = new List<SpecActivo>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaSpecsActivo @placa";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        SpecActivo sp = new SpecActivo()
                        {
                            id_Activo = rdr["id_Activo"].ToString(),
                            modelo = rdr["Modelo"].ToString(),
                            id_marca = rdr["id_Marca"].ToString(),
                            id_familia = rdr["id_Familia"].ToString(),
                            specs = rdr["Specs"].ToString(),
                            nombre_familia = rdr["nombre_Familia"].ToString(),
                            serie_Activo= rdr["serie_Activo"].ToString(),

                        };
                        pro.Add(sp);
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