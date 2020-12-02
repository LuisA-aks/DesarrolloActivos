using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Prestamo
    {
        public string prestadmodeactivo(int id_Activo, int id_Funcionario, string num_boleta, int id_Regiondestino, int id_OficinaDestino, int id_Usuario,
          string fechaentrega, int @idip, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_PrestamoActivo @id_Activo,@id_Funcionario,@num_boleta,@id_Regiondestino,@id_OficinaDestino,@id_Usuario,@fechaentrega,@idip";
                    mycmd.Parameters.Add("@id_Activo", SqlDbType.Int, 150).Value = id_Activo;
                    mycmd.Parameters.Add("@id_Funcionario", SqlDbType.Int, 150).Value = id_Funcionario;
                    mycmd.Parameters.Add("@num_boleta", SqlDbType.VarChar, 150).Value = num_boleta;
                    mycmd.Parameters.Add("@id_Regiondestino", SqlDbType.Int, 150).Value = id_Regiondestino;
                    mycmd.Parameters.Add("@id_OficinaDestino", SqlDbType.Int, 150).Value = id_OficinaDestino;
                    mycmd.Parameters.Add("@id_Usuario", SqlDbType.Int, 150).Value = id_Usuario;
                    mycmd.Parameters.Add("@fechaentrega", SqlDbType.VarChar, 150).Value = fechaentrega;
                    mycmd.Parameters.Add("@idip", SqlDbType.Int, 150).Value = idip;
                    SqlDataReader rdr = mycmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
                        //reto codigo
                    }
                    //return mensaje;
                }

                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
                return mensaje;
            }

        }
    }
}