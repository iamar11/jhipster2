package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.Recette;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.service.dto.RecetteDTO;
import com.mycompany.myapp.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Recette} and its DTO {@link RecetteDTO}.
 */
@Mapper(componentModel = "spring")
public interface RecetteMapper extends EntityMapper<RecetteDTO, Recette> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userLogin")
    RecetteDTO toDto(Recette s);

    @Named("userLogin")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "login", source = "login")
    UserDTO toDtoUserLogin(User user);
}
