<?php 
/**
 * Este controlador busca mostrar como realizar una consulta por medio de API REST
 * a Oracle RightNow con Auth Basic y body/Json por medio de POST en PHP Curl
 * 
 * Autor: Ivano J García.
 * Fecha: 15-04-2019
 */

namespace Custom\Controllers;

class EndPointController extends \RightNow\Controllers\Base
{
    //This is the constructor for the custom controller. Do not modify anything within
    //this function.
    function __construct()
    {
        parent::__construct();
    }


    public function getReport(){
        $reportID = intval(getUrlParm('id'));
        $limit = intval(getUrlParm('limit'));
        $userName = 'username';
        $password = 'password';

        $data = array("id" => $reportID, "limit" => $limit);                                                                    
        $data_string = json_encode($data);

        // $URLEndPoint = 'https://'.$_SERVER['HTTP_HOST'].'/'.'services/rest/connect/v1.3/analyticsReportResults';
        $URLEndPoint = 'https://'.$userName.':'.$password.'@'.$_SERVER['HTTP_HOST'].'/'.'services/rest/connect/v1.3/analyticsReportResults';

        if (!extension_loaded('curl')) {
            load_curl();
        }
        $ch = curl_init($URLEndPoint);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($data_string))
        ); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        try
            {
            $response = curl_exec($ch);
            // echo '<pre>';
            //     print_r(json_decode($response));
            // echo '</pre>'; die;
            echo $response;
            }
        catch (Exception $e)
            {
            echo 'Error message: ' .$e->getMessage();
            }
    }

}

