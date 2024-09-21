package lcw.lcw2_back.service.release;

import lcw.lcw2_back.domain.Release;
import lcw.lcw2_back.dto.ReleaseDTO;
import lcw.lcw2_back.repository.ReleaseRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReleaseServiceImpl implements ReleaseService{

    private final ModelMapper modelMapper;
    private final ReleaseRepository releaseRepository;

    @Override
    public Long writeRelease(ReleaseDTO releaseDTO) {
        Release release = modelMapper.map(releaseDTO, Release.class);
        Long releaseId = releaseRepository.save(release).getReleaseId();

        return releaseId;
    }
}
