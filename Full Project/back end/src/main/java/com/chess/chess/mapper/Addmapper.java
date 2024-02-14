package com.chess.chess.mapper;

import com.chess.chess.dto.Adddto;
import com.chess.chess.entity.Addentity;

public class Addmapper {
     public static Adddto maptoServicedto(Addentity addentity) {
        // Implement the mapping logic
        return new Adddto(
                addentity.getId(),
                addentity.getCoursename(),
                addentity.getDuration(),
                addentity.getTimings(),
                addentity.getMode(),
                addentity.getFee()
                
        );
    }

    public static Addentity maptoServiceentity(Adddto adddto) {
        // Implement the mapping logic
        return new Addentity(
                adddto.getId(),
                adddto.getCoursename(),
                adddto.getDuration(),
                adddto.getTimings(),
                adddto.getMode(),
                adddto.getFee()
            
        );
    }
}

