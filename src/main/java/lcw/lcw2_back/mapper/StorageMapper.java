package lcw.lcw2_back.mapper;

import lcw.lcw2_back.domain.storage.Storage;
import lcw.lcw2_back.dto.StorageDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StorageMapper {
    List<Storage> selectStorage();

    void insertStorage(Storage storage);

    void deleteStorage(Long storageId);

    void updateStorage(Storage storage);

}
