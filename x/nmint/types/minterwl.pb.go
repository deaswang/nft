// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nmint/minterwl.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Minterwl struct {
	CollectionId string     `protobuf:"bytes,1,opt,name=collectionId,proto3" json:"collectionId,omitempty"`
	Admin        string     `protobuf:"bytes,2,opt,name=admin,proto3" json:"admin,omitempty"`
	Supply       uint64     `protobuf:"varint,3,opt,name=supply,proto3" json:"supply,omitempty"`
	Whitelist    []string   `protobuf:"bytes,4,rep,name=whitelist,proto3" json:"whitelist,omitempty"`
	Wllimit      uint64     `protobuf:"varint,5,opt,name=wllimit,proto3" json:"wllimit,omitempty"`
	Price        types.Coin `protobuf:"bytes,6,opt,name=price,proto3" json:"price"`
	Creator      string     `protobuf:"bytes,7,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Minterwl) Reset()         { *m = Minterwl{} }
func (m *Minterwl) String() string { return proto.CompactTextString(m) }
func (*Minterwl) ProtoMessage()    {}
func (*Minterwl) Descriptor() ([]byte, []int) {
	return fileDescriptor_656a2e7d308e1d8f, []int{0}
}
func (m *Minterwl) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Minterwl) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Minterwl.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Minterwl) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Minterwl.Merge(m, src)
}
func (m *Minterwl) XXX_Size() int {
	return m.Size()
}
func (m *Minterwl) XXX_DiscardUnknown() {
	xxx_messageInfo_Minterwl.DiscardUnknown(m)
}

var xxx_messageInfo_Minterwl proto.InternalMessageInfo

func (m *Minterwl) GetCollectionId() string {
	if m != nil {
		return m.CollectionId
	}
	return ""
}

func (m *Minterwl) GetAdmin() string {
	if m != nil {
		return m.Admin
	}
	return ""
}

func (m *Minterwl) GetSupply() uint64 {
	if m != nil {
		return m.Supply
	}
	return 0
}

func (m *Minterwl) GetWhitelist() []string {
	if m != nil {
		return m.Whitelist
	}
	return nil
}

func (m *Minterwl) GetWllimit() uint64 {
	if m != nil {
		return m.Wllimit
	}
	return 0
}

func (m *Minterwl) GetPrice() types.Coin {
	if m != nil {
		return m.Price
	}
	return types.Coin{}
}

func (m *Minterwl) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Minterwl)(nil), "deaswang.nft.nmint.Minterwl")
}

func init() { proto.RegisterFile("nmint/minterwl.proto", fileDescriptor_656a2e7d308e1d8f) }

var fileDescriptor_656a2e7d308e1d8f = []byte{
	// 312 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xbf, 0x4e, 0xf3, 0x30,
	0x14, 0xc5, 0xe3, 0xaf, 0xff, 0xbe, 0x1a, 0x26, 0xab, 0x42, 0xa6, 0x42, 0x26, 0xaa, 0x84, 0x94,
	0xc9, 0x56, 0x41, 0xcc, 0x48, 0x65, 0x62, 0x60, 0xc9, 0xc8, 0x96, 0xb8, 0x6e, 0x6a, 0xc9, 0xb1,
	0xa3, 0xf8, 0x96, 0xd0, 0xb7, 0xe0, 0xb1, 0x3a, 0x76, 0x64, 0x42, 0xa8, 0x15, 0xef, 0x81, 0x92,
	0x34, 0x42, 0x2c, 0x96, 0x7f, 0xf7, 0x1c, 0x5f, 0xf9, 0x1c, 0x3c, 0xb1, 0xb9, 0xb6, 0x20, 0xea,
	0x43, 0x95, 0x95, 0xe1, 0x45, 0xe9, 0xc0, 0x11, 0xb2, 0x54, 0x89, 0xaf, 0x12, 0x9b, 0x71, 0xbb,
	0x02, 0xde, 0x58, 0xa6, 0x93, 0xcc, 0x65, 0xae, 0x91, 0x45, 0x7d, 0x6b, 0x9d, 0x53, 0x26, 0x9d,
	0xcf, 0x9d, 0x17, 0x69, 0xe2, 0x95, 0x78, 0x9d, 0xa7, 0x0a, 0x92, 0xb9, 0x90, 0x4e, 0xdb, 0x56,
	0x9f, 0x7d, 0x23, 0xfc, 0xff, 0xf9, 0xb4, 0x9c, 0xcc, 0xf0, 0xb9, 0x74, 0xc6, 0x28, 0x09, 0xda,
	0xd9, 0xa7, 0x25, 0x45, 0x21, 0x8a, 0xc6, 0xf1, 0x9f, 0x19, 0x99, 0xe0, 0x41, 0xb2, 0xcc, 0xb5,
	0xa5, 0xff, 0x1a, 0xb1, 0x05, 0x72, 0x81, 0x87, 0x7e, 0x53, 0x14, 0x66, 0x4b, 0x7b, 0x21, 0x8a,
	0xfa, 0xf1, 0x89, 0xc8, 0x15, 0x1e, 0x57, 0x6b, 0x0d, 0xca, 0x68, 0x0f, 0xb4, 0x1f, 0xf6, 0xa2,
	0x71, 0xfc, 0x3b, 0x20, 0x14, 0x8f, 0x2a, 0x63, 0x74, 0xae, 0x81, 0x0e, 0x9a, 0x67, 0x1d, 0x92,
	0x7b, 0x3c, 0x28, 0x4a, 0x2d, 0x15, 0x1d, 0x86, 0x28, 0x3a, 0xbb, 0xbd, 0xe4, 0x6d, 0x0c, 0x5e,
	0xc7, 0xe0, 0xa7, 0x18, 0xfc, 0xd1, 0x69, 0xbb, 0xe8, 0xef, 0x3e, 0xaf, 0x83, 0xb8, 0x75, 0xd7,
	0x0b, 0x65, 0xa9, 0x12, 0x70, 0x25, 0x1d, 0x35, 0xdf, 0xeb, 0x70, 0xf1, 0xb0, 0x3b, 0x30, 0xb4,
	0x3f, 0x30, 0xf4, 0x75, 0x60, 0xe8, 0xfd, 0xc8, 0x82, 0xfd, 0x91, 0x05, 0x1f, 0x47, 0x16, 0xbc,
	0xdc, 0x64, 0x1a, 0xd6, 0x9b, 0x94, 0x4b, 0x97, 0x8b, 0xae, 0x56, 0x61, 0x57, 0x20, 0xde, 0x44,
	0xdb, 0x3d, 0x6c, 0x0b, 0xe5, 0xd3, 0x61, 0xd3, 0xd7, 0xdd, 0x4f, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x57, 0x0b, 0xcc, 0xdb, 0x91, 0x01, 0x00, 0x00,
}

func (m *Minterwl) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Minterwl) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Minterwl) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintMinterwl(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x3a
	}
	{
		size, err := m.Price.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintMinterwl(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	if m.Wllimit != 0 {
		i = encodeVarintMinterwl(dAtA, i, uint64(m.Wllimit))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Whitelist) > 0 {
		for iNdEx := len(m.Whitelist) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Whitelist[iNdEx])
			copy(dAtA[i:], m.Whitelist[iNdEx])
			i = encodeVarintMinterwl(dAtA, i, uint64(len(m.Whitelist[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if m.Supply != 0 {
		i = encodeVarintMinterwl(dAtA, i, uint64(m.Supply))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Admin) > 0 {
		i -= len(m.Admin)
		copy(dAtA[i:], m.Admin)
		i = encodeVarintMinterwl(dAtA, i, uint64(len(m.Admin)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.CollectionId) > 0 {
		i -= len(m.CollectionId)
		copy(dAtA[i:], m.CollectionId)
		i = encodeVarintMinterwl(dAtA, i, uint64(len(m.CollectionId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMinterwl(dAtA []byte, offset int, v uint64) int {
	offset -= sovMinterwl(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Minterwl) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CollectionId)
	if l > 0 {
		n += 1 + l + sovMinterwl(uint64(l))
	}
	l = len(m.Admin)
	if l > 0 {
		n += 1 + l + sovMinterwl(uint64(l))
	}
	if m.Supply != 0 {
		n += 1 + sovMinterwl(uint64(m.Supply))
	}
	if len(m.Whitelist) > 0 {
		for _, s := range m.Whitelist {
			l = len(s)
			n += 1 + l + sovMinterwl(uint64(l))
		}
	}
	if m.Wllimit != 0 {
		n += 1 + sovMinterwl(uint64(m.Wllimit))
	}
	l = m.Price.Size()
	n += 1 + l + sovMinterwl(uint64(l))
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovMinterwl(uint64(l))
	}
	return n
}

func sovMinterwl(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMinterwl(x uint64) (n int) {
	return sovMinterwl(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Minterwl) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMinterwl
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Minterwl: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Minterwl: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CollectionId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMinterwl
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMinterwl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CollectionId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Admin", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMinterwl
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMinterwl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Admin = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Supply", wireType)
			}
			m.Supply = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Supply |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Whitelist", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMinterwl
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMinterwl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Whitelist = append(m.Whitelist, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Wllimit", wireType)
			}
			m.Wllimit = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Wllimit |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMinterwl
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMinterwl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Price.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMinterwl
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMinterwl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMinterwl(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMinterwl
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipMinterwl(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMinterwl
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMinterwl
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthMinterwl
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMinterwl
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMinterwl
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMinterwl        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMinterwl          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMinterwl = fmt.Errorf("proto: unexpected end of group")
)
