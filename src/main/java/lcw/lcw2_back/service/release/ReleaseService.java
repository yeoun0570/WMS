package lcw.lcw2_back.service.release;

import lcw.lcw2_back.dto.ReleaseDTO;

public interface ReleaseService {
    Long writeRelease(ReleaseDTO releaseDTO);
}
