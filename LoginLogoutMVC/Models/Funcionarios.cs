using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Funcionarios
    {
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
     //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public string NombreFuncionario { get; set; }
        public string ApellidoFuncionario { get; set; }
        public string CorreoFuncionario { get; set; }
        public int IdOficina { get; set; }



        public string agregar_funcionario(string nombrefuncionario, string apellidofuncionario, string correofuncionario, string oficinafuncionario, string plazafun,string puesto, string fechadesde, string numeroempleado, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute Sp_IngresaFuncionario @nombrefuncionario, @apellidofuncionario, @correofuncionario, @oficinafuncionario, @plazafuncionario,@puesto,@FechaDesde,@NumeroEmpleado";
                mycmd.Parameters.Add("@nombrefuncionario", SqlDbType.VarChar, 150).Value = nombrefuncionario;
                mycmd.Parameters.Add("@apellidofuncionario", SqlDbType.VarChar, 150).Value = apellidofuncionario;
                mycmd.Parameters.Add("@correofuncionario", SqlDbType.VarChar, 150).Value = correofuncionario;
                mycmd.Parameters.Add("@oficinafuncionario", SqlDbType.Int, 150).Value = oficinafuncionario;
                mycmd.Parameters.Add("@plazafuncionario", SqlDbType.VarChar, 150).Value = plazafun;
                mycmd.Parameters.Add("@puesto", SqlDbType.VarChar, 150).Value = puesto;
                mycmd.Parameters.Add("@FechaDesde", SqlDbType.VarChar, 150).Value = fechadesde;
                mycmd.Parameters.Add("@NumeroEmpleado", SqlDbType.VarChar, 150).Value = numeroempleado;

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