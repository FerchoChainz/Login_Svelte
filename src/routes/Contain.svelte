<script>
    import { onMount } from "svelte";

  let username = "";
  let password = "";
  let isLoggedIn = false;

  const handleLogin = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { username: storedUsername, password: storedPassword } =
        JSON.parse(userData);

      if (username === storedUsername && password === storedPassword) {
        isLoggedIn = true;
        alert("Inicio de sesión exitoso");
        console.log("Inicio de sesión exitoso");
      } else {
        alert("Nombre de usuario o contraseña incorrectos");
      }
    } else {
      alert("No hay datos de usuario almacenados");
    }

    username = "";
    password = "";
  };

  const handleLogout = () => {
    isLoggedIn = false;
  };


  const handleSubmit = () => {
    // Guardar los datos en el local storage
    localStorage.setItem("userData", JSON.stringify({ username, password }));

    // Reiniciar los campos del formulario
    username = "";
    password = "";
  };

  onMount(() => {
    // Verificar si hay datos de usuario almacenados en el local storage
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { username, password } = JSON.parse(userData);
      console.log("Datos de usuario almacenados:", username, password);
    }
  });
</script>



    <section class="user">
      <div class="user_options-container">
        <div class="user_options-text">
          <div class="user_options-unregistered">
            <h2 class="user_unregistered-title">¿No tienes una cuenta aún?</h2>
            <p class="user_unregistered-text">
              ¡Crea una cuenta para almacenar en el local storage para ver la practica!
            </p>
            <button class="user_unregistered-signup" id="signup-button">
              ¡Registrarme!
            </button>
          </div>

          <div class="user_options-registered">
            <h2 class="user_registered-title">¿Ya tienes una cuenta?</h2>
            <p class="user_registered-text">
              ¡Usa el almacenamiento del local Storage, con tu usuario registrado para poder loggearte
            </p>
            <button class="user_registered-login" id="login-button">
              Login
            </button>
          </div>
        </div>

        <div class="user_options-forms" id="user_options-forms">
          <div class="user_forms-login">
            <h2 class="forms_title">Login</h2>
            {#if !isLoggedIn}
            <form class="forms_form" on:submit={handleLogin}>
              <fieldset class="forms_fieldset">
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Username"
                    class="forms_field-input"
                    required 
                    bind:value={username}
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    class="forms_field-input"
                    required
                    bind:value={password}
                  />
                </div>
              </fieldset>

              <div class="forms_buttons">
                <button type="button" class="forms_buttons-forgot">
                  Forgot password?
                </button>
                <input
                  type="submit"
                  value="Log In"
                  class="forms_buttons-action"
                />
              </div>
            </form>
            {:else}
          <h2>¡Bienvenido!</h2>
          <p>
            Estás actualmente registrado y has iniciado sesión como {username}.
          </p>
          <button on:click={handleLogout}>Cerrar sesión</button>
        {/if}
          </div>

          <div class="user_forms-signup">
            <h2 class="forms_title">Register</h2>
            <form class="forms_form" on:submit={handleSubmit}>
              <fieldset class="forms_fieldset">
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Username"
                    class="forms_field-input"
                    required
                    bind:value={username}
                  />
                </div>

                <div class="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    class="forms_field-input"
                    required
                    bind:value={password}
                  />
                </div>
              </fieldset>

              <div class="forms_buttons">
                <input
                  type="submit"
                  value="Registrarme"
                  class="forms_buttons-action"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

