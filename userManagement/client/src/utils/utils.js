export function unSelectCheckBoxes(className) {
    document.querySelectorAll("." + className).forEach(htmlElement => {
        htmlElement.checked = false;
    })
}

export function selectCheckBoxes(className) {
    document.querySelectorAll("." + className).forEach(htmlElement => {
        htmlElement.checked = true;
    })
}

/**
 * 
 * @param {Event} event 
 */
export function selectAllDeleteEventHandler(event) {
    if (event.currentTarget.checked) {
        selectCheckBoxes("user-checkbox-delete")
      } else {
        unSelectCheckBoxes('user-checkbox-delete');
      }
}

export function unSelectAllEdit() {
    document.querySelectorAll(".user-checkbox-edit").forEach(element => {
        element.checked = false;
    })
}

export function unSelectAllDelete() {
    document.querySelectorAll(".user-checkbox-delete").forEach(element => {
        element.checked = false;
    })
}

export function setEditEventHandler(event) {
    if (event.currentTarget.checked) {
        document.querySelectorAll(".user-checkbox-edit").forEach(element => {
            if (element !== event.currentTarget) element.checked = false;
        })
    }
}