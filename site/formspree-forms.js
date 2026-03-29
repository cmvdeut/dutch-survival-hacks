(function () {
  if (!window.fetch) {
    return;
  }
  document.querySelectorAll('form[action*="formspree.io"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action');
      var nextInput = form.querySelector('input[name="_next"]');
      var nextUrl = nextInput && nextInput.value ? nextInput.value : '/';
      var button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
      }
      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            window.location.href = nextUrl;
            return;
          }
          return res.text().then(function (text) {
            var data = {};
            try {
              data = text ? JSON.parse(text) : {};
            } catch (err) {}
            var d = data;
            var msg =
              (d && d.error) ||
              (d && d.errors && d.errors[0] && (d.errors[0].message || d.errors[0].error || d.errors[0])) ||
              'Something went wrong.';
            throw new Error(msg);
          });
        })
        .catch(function () {
          if (button) {
            button.disabled = false;
            button.removeAttribute('aria-busy');
          }
          window.alert('Something went wrong. Please try again in a moment.');
        });
    });
  });
})();
