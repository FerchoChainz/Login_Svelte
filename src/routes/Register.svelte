<script>
  import { onMount } from "svelte";

  let username = "";
  let password = "";

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
        <h2 class="user_unregistered-title">Don't have an account?</h2>
        <p class="user_unregistered-text">
          Banjo tote bag bicycle rights, High Life sartorial cray craft beer
          whatever street art fap.
        </p>
        <button class="user_unregistered-signup" id="signup-button"
          >Sign up</button
        >
      </div>

      <div class="user_options-registered">
        <h2 class="user_registered-title">Have an account?</h2>
        <p class="user_registered-text">
          Banjo tote bag bicycle rights, High Life sartorial cray craft beer
          whatever street art fap.
        </p>
        <button class="user_registered-login" id="login-button">Login</button>
      </div>
    </div>

    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-signup">
        <h2 class="forms_title">Sign Up</h2>
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
                placeholder="password"
                class="forms_field-input"
                required
                bind:value={password}
              />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" value="Sign up" class="forms_buttons-action">
          </div>

          <!--<label>
            Username:
            <input type="text" bind:value={username} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" bind:value={password} />
          </label>
          <br />
          <button type="submit">Registrarse</button>
          -->
        </form>
      </div>
    </div>
  </div>
</section>
