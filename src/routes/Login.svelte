<script>
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
      } else {
        console.log("Nombre de usuario o contraseña incorrectos");
      }
    } else {
      console.log("No hay datos de usuario almacenados");
    }

    username = "";
    password = "";
  };

  const handleLogout = () => {
    isLoggedIn = false;
  };
</script>

<section class="user">
  <div class="user_options-container">
    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-login">
        <h2 class="forms_title">Login</h2>
        {#if !isLoggedIn}
          <form class="forms_form" on:submit={handleLogin}>
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input
                  type="text"
                  class="forms_field-input"
                  bind:value={username}
                  required
                  placeholder="User name"
                />
              </div>
              <div class="forms_field">
                <input
                  type="password"
                  class="forms_field-input"
                  bind:value={password}
                  required
                  placeholder="password"
                />
              </div>
            </fieldset>

            <div class="forms_buttons">
              <button type="button" class="forms_buttons-forgot"
                >Forgot password?</button
              >
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
    </div>
  </div>
</section>

<!--<h1>Login</h1>
    <label>
      Username:
      <input type="text" bind:value={username} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
    <br />
    <button type="submit">Iniciar sesión</button>
    -->
