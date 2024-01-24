package com.mycompany.myapp.service;

import com.mycompany.myapp.service.dto.RecetteDTO;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.mycompany.myapp.domain.Recette}.
 */
public interface RecetteService {
    /**
     * Save a recette.
     *
     * @param recetteDTO the entity to save.
     * @return the persisted entity.
     */
    RecetteDTO save(RecetteDTO recetteDTO);

    /**
     * Updates a recette.
     *
     * @param recetteDTO the entity to update.
     * @return the persisted entity.
     */
    RecetteDTO update(RecetteDTO recetteDTO);

    /**
     * Partially updates a recette.
     *
     * @param recetteDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<RecetteDTO> partialUpdate(RecetteDTO recetteDTO);

    /**
     * Get all the recettes.
     *
     * @return the list of entities.
     */
    List<RecetteDTO> findAll();

    /**
     * Get all the recettes with eager load of many-to-many relationships.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<RecetteDTO> findAllWithEagerRelationships(Pageable pageable);

    /**
     * Get the "id" recette.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<RecetteDTO> findOne(Long id);

    /**
     * Delete the "id" recette.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
