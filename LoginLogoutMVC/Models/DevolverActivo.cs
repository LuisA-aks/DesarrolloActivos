using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DevolverActivo
    {
        public string Devolver_Activo(string boleta, string placa, int iduser, int idactivo, int idip, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_DevolverPrestamo @num_boleta, @placa, @id_Usuario, @id_Activo, @id_ip";
                    mycmd.Parameters.Add("@num_boleta", SqlDbType.VarChar, 150).Value = boleta;
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;
                    mycmd.Parameters.Add("@id_Usuario", SqlDbType.Int, 150).Value = iduser;
                    mycmd.Parameters.Add("@id_Activo", SqlDbType.Int, 150).Value = idactivo;
                    mycmd.Parameters.Add("@id_ip", SqlDbType.Int, 150).Value = idip;
                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
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
            return mensaje;
        }

    }
}