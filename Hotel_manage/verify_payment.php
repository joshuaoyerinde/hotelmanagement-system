<?php
include 'db.php';

class verifypayment extends hotel
{
  public function verifyPay()
  {
    // $this->__database();
    $this->__daTaBase();
    $getref = json_decode(file_get_contents('php://input'),true);
    $ref = $getref['ref'];
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://api.paystack.co/transaction/verify/$ref",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Authorization: Bearer sk_test_5b4890a6dc34fba3a5e2f7cf4ab5806900fc1013",
        "Cache-Control: no-cache",
      ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      echo $response;
    }
  }
  
}
$verify = new verifypayment;
$verify->verifyPay();



?>