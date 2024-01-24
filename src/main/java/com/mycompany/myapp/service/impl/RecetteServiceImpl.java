package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.domain.Recette;
import com.mycompany.myapp.repository.RecetteRepository;
import com.mycompany.myapp.service.RecetteService;
import com.mycompany.myapp.service.dto.RecetteDTO;
import com.mycompany.myapp.service.mapper.RecetteMapper;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.mycompany.myapp.domain.Recette}.
 */
@Service
@Transactional
public class RecetteServiceImpl implements RecetteService {

    private final Logger log = LoggerFactory.getLogger(RecetteServiceImpl.class);

    private final RecetteRepository recetteRepository;

    private final RecetteMapper recetteMapper;

    public RecetteServiceImpl(RecetteRepository recetteRepository, RecetteMapper recetteMapper) {
        this.recetteRepository = recetteRepository;
        this.recetteMapper = recetteMapper;
    }

    @Override
    public RecetteDTO save(RecetteDTO recetteDTO) {
        log.debug("Request to save Recette : {}", recetteDTO);
        Recette recette = recetteMapper.toEntity(recetteDTO);
        recette = recetteRepository.save(recette);
        return recetteMapper.toDto(recette);
    }

    @Override
    public RecetteDTO update(RecetteDTO recetteDTO) {
        log.debug("Request to update Recette : {}", recetteDTO);
        Recette recette = recetteMapper.toEntity(recetteDTO);
        recette = recetteRepository.save(recette);
        return recetteMapper.toDto(recette);
    }

    @Override
    public Optional<RecetteDTO> partialUpdate(RecetteDTO recetteDTO) {
        log.debug("Request to partially update Recette : {}", recetteDTO);

        return recetteRepository
            .findById(recetteDTO.getId())
            .map(existingRecette -> {
                recetteMapper.partialUpdate(existingRecette, recetteDTO);

                return existingRecette;
            })
            .map(recetteRepository::save)
            .map(recetteMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RecetteDTO> findAll() {
        log.debug("Request to get all Recettes");
        return recetteRepository.findAll().stream().map(recetteMapper::toDto).collect(Collectors.toCollection(LinkedList::new));
    }

    public Page<RecetteDTO> findAllWithEagerRelationships(Pageable pageable) {
        return recetteRepository.findAllWithEagerRelationships(pageable).map(recetteMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<RecetteDTO> findOne(Long id) {
        log.debug("Request to get Recette : {}", id);
        return recetteRepository.findOneWithEagerRelationships(id).map(recetteMapper::toDto);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Recette : {}", id);
        recetteRepository.deleteById(id);
    }
}
