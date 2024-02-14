package com.chess.chess.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.chess.chess.dto.Adddto;
import com.chess.chess.entity.Addentity;
import com.chess.chess.mapper.Addmapper;
import com.chess.chess.repository.Addrepo;

import jakarta.transaction.Transactional;

@Service
public class Addservice {
     private final Addrepo addrepo;

    public Addservice(Addrepo addrepo) {
        this.addrepo = addrepo;
    }

    public List<Adddto> getAllServices() {
        List<Addentity> services = addrepo.findAll();
        return services.stream()
                .map(Addmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Adddto getServiceByCoursename(String coursename) {
        Addentity addentity = addrepo.findByCoursename(coursename);
        return Addmapper.maptoServicedto(addentity);
    }

    public Adddto createService(Adddto servicedto) {
        Addentity addentity = Addmapper.maptoServiceentity(servicedto);
        addentity = addrepo.save(addentity);
        return Addmapper.maptoServicedto(addentity);
    }
    @Transactional

    public Adddto updateServiceByCoursename(String coursename, Adddto updatedServicedto) {
        Addentity existingService = addrepo.findByCoursename(coursename);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setCoursename(updatedServicedto.getCoursename());
            existingService.setDuration(updatedServicedto.getDuration());
            existingService.setTimings(updatedServicedto.getTimings());
            existingService.setMode(updatedServicedto.getMode());
            existingService.setFee(updatedServicedto.getFee());

           ;
            
            existingService = addrepo.save(existingService);
            return Addmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
@Transactional
    public void deleteServiceByCoursename(String coursename) {
        addrepo.deleteByCoursename(coursename);
    }

}
