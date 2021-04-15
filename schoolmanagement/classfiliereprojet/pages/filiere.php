<?php
if(session_status() != PHP_SESSION_ACTIVE) {
    session_start();
}
  if(isset($_SESSION['user'])){

 ?>
<div class="container-fluid">
    <div class="card bg-white" >
        <div class="card-header card-color">
            <p class="h2 text-center text-uppercase font-weight-bold pt-2">Gestion des filiéres</p>
        </div>
        <div class="card-body container-fluid" >
            <div class="row">
                <div class="col-sm-6 mb-2">
                    <label for="code">Code : </label>
                    <input class="" type="text" id="id" hidden>
                    <input class="form-control" type="text" id="code" required>
                </div>
                <div class="col-sm-6 mb-2">
                    <label for="libelle">Libelle : </label>
                    <input class="form-control" type="text" id="libelle" required>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-outline-success mt-3 mb-3" id="btn">Ajouter</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <table id="table_id" class="display" width="100%">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Code</th>
                            <th scope="col">Libelle</th>
                            <th scope="col">Supprimer</th>
                            <th scope="col">Modifier</th>
                        </tr>
                    </thead>
                </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="script/filiere.js" type="text/javascript"></script>
<?php

}else{
  header("Location: ../index.php");
}
 ?>
