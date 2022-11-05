"use strict";
window.addEventListener("load", () => {
  const form = document.querySelector(".new-event-form");
  const input = document.querySelector(".inputText");
  const list_el = document.querySelector(".events");
  const eventHead = document.querySelector(".eventHead");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const event = input.value;
    if (event) {
      const event_el = document.createElement("div");
      event_el.classList.add("event");

      const event_content_el = document.createElement("div");
      event_content_el.classList.add("content");

      event_el.appendChild(event_content_el);

      const event_input_el = document.createElement("input");
      event_input_el.classList.add("text");
      event_input_el.type = "text";
      event_input_el.value = event;
      event_input_el.setAttribute("readonly", "readonly");

      event_content_el.appendChild(event_input_el);

      const event_actions_el = document.createElement("div");
      event_actions_el.classList.add("actions");

      const event_edit_el = document.createElement("button");
      event_edit_el.classList.add("edit");
      event_edit_el.innerText = "Edit";

      const event_delete_el = document.createElement("button");
      event_delete_el.classList.add("delete");
      event_delete_el.innerText = "Delete";

      event_actions_el.appendChild(event_edit_el);
      event_actions_el.appendChild(event_delete_el);

      event_el.appendChild(event_actions_el);

      list_el.appendChild(event_el);

      input.value = "";

      event_edit_el.addEventListener("click", (e) => {
        if (event_edit_el.innerText.toLowerCase() == "edit") {
          event_edit_el.innerText = "Save";
          event_input_el.removeAttribute("readonly");
          event_input_el.focus();
        } else {
          event_edit_el.innerText = "Edit";
          event_input_el.setAttribute("readonly", "readonly");
        }
      });

      event_delete_el.addEventListener("click", (e) => {
        list_el.removeChild(event_el);
      });
    } else {
      alert("請輸入");
    }
  });

  eventHead.addEventListener("click", (e) => {
    let tabs = document.querySelectorAll(".eventText");
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
