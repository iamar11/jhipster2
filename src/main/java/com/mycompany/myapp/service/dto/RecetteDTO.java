package com.mycompany.myapp.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A DTO for the {@link com.mycompany.myapp.domain.Recette} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class RecetteDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(min = 5, max = 150)
    private String title;

    @NotNull
    @Size(min = 5, max = 750)
    private String description;

    private LocalDate date;

    private UserDTO user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RecetteDTO)) {
            return false;
        }

        RecetteDTO recetteDTO = (RecetteDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, recetteDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RecetteDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", date='" + getDate() + "'" +
            ", user=" + getUser() +
            "}";
    }
}
